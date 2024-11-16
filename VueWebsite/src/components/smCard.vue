<script>
export default {
    name: 'MyComponent',
};
</script>

<template>
    <div class="pure-g">
        <div class="pure-u-sm-1 pure-u-md-1-3">
            <h3>
                <slot name="post-title">Slot Terms</slot>
            </h3>
            <slot name="post-link">
                <a href="#" class="pure-button">
                    <slot name="post-button">Visit</slot>
                </a>
            </slot>
        </div>
        <div class="pure-u-sm-1 pure-u-md-2-3">
            <slot name="post-image">
                <img src="https://picsum.photos/300/100">
            </slot>
            <p>
                <slot name="post-content"> Ea ex blanditiis recusandae debitis tenetur. Voluptates aut reprehenderit.
                </slot>
            </p>
        </div>
    </div>
</template>

<style scoped></style>