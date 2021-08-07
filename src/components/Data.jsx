class Data {
  static all() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}

export default Data;
