//very good way to write code 
//this way you make sure to make less mistakes, and actually makes easier to make new routes

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT = "/";

//export all the path for the DASHBOARD
export default {
  root: ROOT,
  general: {
    app: path(ROOT, "app"),
  },
};
