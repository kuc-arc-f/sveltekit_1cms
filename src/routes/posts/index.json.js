import Config from '../../../app_config'

// GET /xxx.json
export const get = async (request) => {
  var cfg = Config.get_config()
  const res = await fetch( cfg.MY_JSON_URL);
  const posts = await res.json();
  if (res.status === 404) {
    return { body: [] };  
  }  
  var ret = {
    status : 200,
    body : posts,
  }
  return ret;
};

