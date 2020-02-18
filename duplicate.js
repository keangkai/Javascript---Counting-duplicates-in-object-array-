const names = [{  _id: 1 }, { _id: 1}, { _id: 2}, { _id: 1}];

const result = [...names.reduce( (mp, o) => {
    if (!mp.has(o._id)) mp.set(o._id, { ...o, count: 0 });
    mp.get(o._id).count++;
    return mp;
}, new Map).values()];

console.log(result);
