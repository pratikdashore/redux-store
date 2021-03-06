export class Store {
  private subsribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.subsribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);
    console.log(this.state);
    this.notify();
  }

  subscribe(fn: Function) {
    this.subsribers = [...this.subsribers, fn];
    this.notify();
    return () => {
      this.subsribers = this.subsribers.filter(sub => sub !== fn);
    };
  }

  private notify() {
    this.subsribers.forEach(fn => fn(this.value));
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
