<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-icon
      large
      color="white"
    >
      mdi-account-group
    </v-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer>
  <v-row>
    <v-col cols="12">

      <v-card-text class="flex flex-wrap">
        <v-card-title>Contact Us</v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <a href="mailto:info@my-company.com">contact@dama-sd.com</a>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <a href="tel">1-605-360-5478</a>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-facebook</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <a href="https://www.facebook.com/my-company-page">Facebook</a>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-twitter</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <a href="https://www.twitter.com/my-company-page">Twitter</a>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-linkedin</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <a href="https://www.linkedin.com/company/my-company">LinkedIn</a>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-col>
  </v-row>
  <v-col cols="12">
      <v-card-text class="flex flex-wrap">
        <v-card-title>Copyright &copy; {{ new Date().getFullYear() }}</v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-link to="/privacy-policy">Privacy Policy</v-list-item-link>
          </v-list-item>
          <v-list-item>
            <v-list-item-link to="/terms-of-service">Terms of Service</v-list-item-link>
          </v-list-item>
          <v-list-item>
            <v-list-item-link href="https://nuwec.com" target="_blank">Made by nuwec.com</v-list-item-link>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-col>
</v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-contacts',
          title: 'Contact',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'DAMA-South Dakota'
    }
  }
}
</script>