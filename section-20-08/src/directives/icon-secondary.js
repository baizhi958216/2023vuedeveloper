export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-green-400 text-2xl`;

    if (binding.value.right) {
      iconClass += ` float-right`;
    }

    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
