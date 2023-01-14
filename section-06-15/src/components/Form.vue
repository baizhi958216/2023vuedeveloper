<template>
    <form>
        <div class="help">
            <slot name="help"></slot>
        </div>
        <div class="fields">
            <slot name="fields"></slot>
        </div>
        <div class="buttons">
            <slot name="buttons"></slot>
        </div>
    </form>
    <!--  
        By having a slot with no name, any elements that aren't assigned
        to a specific slot will be put here by default.
    -->
    <slot></slot>
</template>