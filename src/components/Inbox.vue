<template>
    <div class="inbox">
        <ul class="list-group" v-if="action === 'list'">
            <li class="list-group-item" v-for="subject in subjects">
                <div class="media-body">
                    {{ subject }}
                </div>
            </li>
            <li class="list-group-item" v-for="body in bodies">
                <div class="media-body">
                    {{ body }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    const remote = require('electron').remote;

    export default {
        data () {
            return {
                action: 'list',
                subjects: remote.getGlobal("subjects"),
                bodies: remote.getGlobal("bodies"),
                currentMailId: null
            }
        },
        methods: {
            changeAction (action) {
                this.action = action;
            },
            removeMail (mail) {
                let index = this.mails.indexOf(mail);
                this.mails.splice(index, 1);
            }
        }
    }
</script>

<style>
    .inbox {
        text-align: left;
    }
</style>
