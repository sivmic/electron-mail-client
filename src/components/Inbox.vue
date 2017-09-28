<template>
    <div class="inbox">
        <ul class="list-group" v-if="action == 'list'">
            <li class="list-group-item" v-for="mail in mails">
                <div class="media-body">
                    <strong>{{ mail.sender }}</strong>
                    <p>{{ mail.subject }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                action: 'list',
                mails: [
                    // temporary
                    {sender: "sivak.main@gmail.com", subject: "Hello there"},
                    {sender: "vesel.fil@gmail.com", subject: "Test subject"}
                ],
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