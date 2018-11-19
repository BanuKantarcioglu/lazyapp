class Api{
  static url(){
    if (process.env.NODE_ENV === 'development')
      return "http://localhost:3001";
    else {
        return "https://lazydoapi.herokuapp.com";
      }
  }
}
export default Api;
