import firebaseDatabase from '../utils/firebaseUtils';

export default class FirebaseService {
  static getDataList = (nodePath, callback) => {
    const query = firebaseDatabase.ref(nodePath);

    query.on('value', (dataSnapshot) => {
      const items = [];

      dataSnapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        items.push(item);
      });

      callback(items);
    });

    return query;
  };
}
