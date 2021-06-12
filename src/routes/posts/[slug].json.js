//import marked from  'marked'
import LibCms from '../../lib/LibCms'
import Config from '../../../app_config'
//
export async function get({ params }) {
	const { slug } = params;
	var cfg = Config.get_config()
	const res = await fetch( cfg.MY_JSON_URL);
	const data = await res.json();
  const item  = LibCms.get_show_item( data.items, String(slug) )
	if (res.status === 404) {
		return { body: [] };  
	}  
  var ret = {
    status : 200,
    body : item,
  }	
  return ret;
}
