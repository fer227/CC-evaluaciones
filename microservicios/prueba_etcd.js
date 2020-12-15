const { Etcd3 } = require('etcd3');
const etcd = new Etcd3();

(async () => {
    await etcd.put("unaKey").value("unValue");
    console.log('unaKey:', await etcd.get('unaKey').string());
    console.log('nodeversion:', await etcd.get('nodeversion').string());
})();