<template>
    <div>
        <div class="border-2 w-[50rem] p-[1rem]">
            <div class="my-[1rem] text-[2rem]">
                <h1>LIFE CYCLE HOOKS</h1>
            </div>
            <div>
                this <span class="text-[red]">onBeforeMount</span> will be render before the element will be inserted in
                the DOM,
                The component is set up, but the DOM is not yet created.
                Operations in this hook occur before the initial render.
                <span class="text-[red]">{{ message }}</span>

            </div>
            <br>
            <div>
                <span> this <span class="text-[red]">onMounted</span> will trigger rigth after the
                    component display in the
                    template,
                    The component's DOM elements have been created and inserted into the document.
                    Operations in this hook occur after the initial render, allowing access to the DOM.
                    <br>
                    changes in 5 seconds:
                    <span class="text-[red] text-center">{{ name }}</span>
                </span>
            </div>
            <br>
            <div>
                the <span class="text-[red]">onBeforeUpdate</span> <br>
                Usage: Called before the component updates, right before the DOM patching.
                beforeUpdate: <span class="text-[red]">{{ name }}</span>
            </div>
            <br>

            <div>
                The <span class="text-[red]"> onUpdated</span> lifecycle hook in Vue 3 is called after the component has
                been updated. This hook is
                particularly useful for performing actions that need to occur after the component's data has changed and
                the DOM has been re-rendered.
                <br>
                <br>
                <button class="p-[1rem] bg-[gray]" @click="updateName">Update</button>
                <br><br>

                When to Use onUpdated
                To perform actions that need to occur after a data change has caused the component to re-render.
                To access the updated DOM elements.
                To integrate with third-party libraries that require updated DOM elements.
                <br>
                <br>
                <span class="text-[red]">{{ name }}</span>
            </div>
<br>
            <div>
                The <span class="text-[red]">onUnmounted</span>
                hook in Vue 3 is triggered when the component is being removed from the DOM. This can happen
                in various scenarios, including:

                Navigation: If you're using Vue Router or a similar routing library, onUnmounted will be triggered when
                the
                user navigates away from the current route that contains the component.

                Conditional Rendering: If the component is conditionally rendered and the condition changes to false,
                causing the component to be removed from the DOM, onUnmounted will be triggered.

                Direct Removal: If you programmatically remove the component from its parent (e.g., using v-if or v-show
                directives, or manipulating the DOM directly), onUnmounted will be triggered.

                Destroying Parent Component: If the parent component of the current component is unmounted, onUnmounted
                will
                be triggered for all its child components.
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onUpdated, onBeforeUpdate, onUnmounted } from 'vue'

const name = ref('ralph santolorin')
const message = ref('Hello, Vue!');

onMounted(() => {
    setTimeout(() => {
        name.value = 'ano pangalan mo????'
    }, 5000)
})

onBeforeMount(() => {
    console.log('this componment is about to be mounted')
    message.value = 'this message is about to be mounted'
})

const updateName = () => {
    name.value = 'na updated na ang name!!!'
}
onBeforeUpdate(() => {
    message.value = 'this is the value before it updates'
})
onUpdated(() => {
    message.value = message.value
    console.log(name.value)
})
onUnmounted(() => {
    console.log('onunMounted')
})
</script>

<style lang="scss" scoped></style>