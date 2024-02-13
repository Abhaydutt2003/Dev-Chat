//very good way to write code 

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
