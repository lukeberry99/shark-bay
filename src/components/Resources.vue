<template>
    <div>
        <ul>
            <li v-for="(resource, key) in resources" v-bind:key="key">
                {{ resource.name }} - {{ resource.amount }}
            </li>
        </ul>
    </div>
</template>
<script>
import resources from '../resources'
export default {
    name: 'Resources',
    data () {
        resources: resources.resources
    },
    methods: {

    }
}
</script>
<style>
</style>