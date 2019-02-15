import { Container } from 'unstated';

export default class AppContainer extends Container {
    state = {
        user: {},
        org: {}
    };

    setOrg(org) {
        this.setState({ org });
    }

    setUser(user) {
        this.setState({ user });
    }
}
