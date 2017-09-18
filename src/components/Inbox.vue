<template>
    <div class="contacts">
        <table class="table-striped" v-if="action == 'list'">
            <thead>
                <tr>
                    <th>Sender</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mail in mails">
                    <td>{{ mail.sender }}</td>
                    <td>{{ mail.subject }}</td>
                    <td><a href="#" @click.prevent="removeMail(mail)"><span class="icon icon-cancel-circled"></span></a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                action: 'list',
                mails: [],
                currentMailId: null,
                sender: '',
                subject: ''
            }
        },
        methods: {
            changeAction (action) {
                this.action = action;
                this.sender = '';
                this.subject = '';
            },
            removeMail (mail) {
                let index = this.mails.indexOf(mail);
                this.mails.splice(index, 1);
            }
        }
    }
</script>

<style>
    .contacts {

    }
</style>