import React from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				getActions: () => this.state.actions,
				setStore: updatedStore => {
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					});
					//localStorage.setItem("userStore", JSON.stringify(this.state.store.loginUserData));
				}
			});
		}
		componentDidMount() {
			//const previusStore = localStorage.getItem("userStore");
			//if (previusStore) this.setState({ store: JSON.parse(previusStore) });
			//if (previusStore) this.setState({ store: { ...this.state.store, loginUserData: JSON.parse(previusStore) } });
		}
		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};
export default injectContext;