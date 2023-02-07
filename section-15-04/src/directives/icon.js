export default {
  /* 
    Lifecycle Functions
    beforeMount: called when the directive is first bound to the element and before parent component is mounted
    mounted: call when the directive is mounted to the document
    beforeUpdate: call before the directive is updated
    updated: call after the directive is updated
    beforeUnmount: call before a directive is unmounted from the document
    unmounted: called after a directive is unmounted from document

    Hook Arguments
    el: the element the binding sits on
    binding: an object which contains the arguments that are passed into the hooks
    vnode: allows you to refer directly to the node in the virtual DOM if you need to
    prevNode: The previous vnode object before the directive was updated (applies to beforeUpdate and updated hooks only)
    */
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value} text-xl`;

    /* 
    arguments
    'arg' always defined in the binding object, whereas modifiers will return undefined
    <div class="..." v-icon:full="...">
    if(binding.arg==='full'){
      iconClass = binding.value
    } 
    */

    /*
    modifiers is better alternative to arguments, it define multiple at once
    */
    if (binding.modifiers.right) {
      iconClass += " float-right";
    }

    if (binding.modifiers.yellow) {
      iconClass += " text-yellow-400";
    } else {
      iconClass += " text-green-400";
    }

    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
