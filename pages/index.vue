<template>
  <v-app dark
    :style="{ backgroundImage: 'url(@/assets/images/OIP.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: 0 }">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-carousel height="300" width="100%" :cycle="true">

            <v-carousel-item>
              <img src="@/assets/images/joining.jpg" alt="Image 1" class="flex-shrink-0" width="100%" height="100%" object-fit="cover">
              <v-overlay>
                <v-container fluid>
                  <v-card-text class="text-center">
                    <div class="h1-container">
                        <span>Human Rights</span>
                        <span>South Dakota</span>
                      </div>
                    <p :style="{ marginTop: '10px' }">We are a welcoming and inclusive community. Every human is entitled to rights and freedoms, without distinction of any kind.</p>
                    <v-btn color="primary" dark class="mx-auto">Join Us</v-btn>
                  </v-card-text>
                </v-container>
              </v-overlay>
            </v-carousel-item>

            <v-carousel-item>
              <img src="@/assets/images/holding.jpg" alt="Image 1" class="flex-shrink-0" width="100%" height="100%" object-fit="cover">
              <v-overlay>
                <v-container fluid>
                  <v-card-text class="text-center">
                    <div class="h1-container">
                        <span>Human Rights</span>
                        <span>South Dakota</span>
                      </div>
                    <p :style="{ marginTop: '10px' }">In Dignity, Freedom and Justice for all Stand up for Human Rights.</p>
                    <v-btn color="primary" dark class="mx-auto">Join Us</v-btn>
                  </v-card-text>
                </v-container>
              </v-overlay>
            </v-carousel-item>
            <v-carousel-item>
              <img src="@/assets/images/crowd.jpg" alt="Image 1" class="flex-shrink-0" width="100%" height="100%" object-fit="cover">
              <v-overlay>
                <v-container fluid>
                  <v-card-text class="text-center">
                    <div class="h1-container">
                        <span>Human Rights</span>
                        <span>South Dakota</span>
                      </div>
                    <p :style="{ marginTop: '10px' }">Your voice matters. Get involved in human rights for all in South Dakota.</p>
                    <v-btn color="primary" dark class="mx-auto">Join Us</v-btn>
                  </v-card-text>
                </v-container>
              </v-overlay>
            </v-carousel-item>

          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
  <v-col cols="12">
    <v-card class="dama-wheel-card" style="display: flex; flex: 1">
      <v-container>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RBiA_7yU0nc?rel=0" frameborder="0" allowfullscreen id="player"></iframe>
      </v-container>

      <v-card-text>
        <span>Human Rights</span>
        <span>South Dakota</span>
        <p style="margin-top: 20px">
          The <a href="https://www.un.org/sites/un2.un.org/files/2021/03/udhr.pdf" target="_blank">Universal Declaration of Human Rights (UDHR)</a> is a milestone document in the history of human rights. Drafted by representatives with different legal and cultural backgrounds from all regions of the world, 
          the Declaration was proclaimed by the United Nations General Assembly in Paris on 10 December 1948 by General Assembly resolution 217 A (III) as a common standard of achievements for all peoples and all nations. It sets out, for the first time, fundamental human rights to be universally protected. 
          Since its adoption in 1948, the UDHR has been translated into more than 500 languages - the most translated document in the world - and has inspired the constitutions of many newly independent States and many new democracies. The UDHR, together with the International Covenant on Civil and Political 
          Rights and its two Optional Protocols (on the complaints procedure and on the death penalty) and the International Covenant on Economic, Social and Cultural Rights and its Optional Protocol, form the so-called International Bill of Human Rights.
        </p>
        <v-btn color="primary" dark class="mx-auto">Join Us</v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>

<v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Become a Member</v-card-title>
            <v-card-text>
  <p>Human Rights South Dakota is a non-profit organization that works to promote and protect human rights for all South Dakotans. We are dedicated to creating a more just and equitable society where everyone has the opportunity to thrive.</p>

  <p>There are many reasons why you should become a member of Human Rights South Dakota. Here are just a few:</p>

  <ul>
    <li>Stay informed</li>
    <li>Get involved</li>
    <li>Make a difference</li>
    <li>Be a part of a community of people who care about human rights</li>
    <li>Make your voice heard</li>
    <li>Get involved in local human rights efforts</li>
  </ul>

  <p>Here are some specific examples of the work that Human Rights South Dakota does:</p>

  <ul>
    <li>Advocating for legislation and policies that protect human rights</li>
    <li>Educating the public about human rights</li>
    <li>Providing support to victims of human rights abuses</li>
  </ul>

  <p>If you are committed to promoting and protecting human rights, then I encourage you to become a member of Human Rights South Dakota. Your membership will help us to continue our important work and make a difference in the lives of South Dakotans.</p>

  <v-btn color="primary" dark class="mx-auto">Join Us</v-btn>
</v-card-text>

          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card class="flex flex-wrap">
            <v-card-title>Events</v-card-title>
            <v-card-text>
              <p>Are you passionate about human rights? Do you believe that everyone deserves to be treated with dignity and respect? If so, then we invite you to join us for a series of events focused on promoting human rights in South Dakota.</p>

              <p>  Our events will feature a variety of speakers and activities that will explore the many different aspects of human rights. We'll learn about the history of human rights, the challenges that still exist today, and what we can do to make a difference.</p>

              <p> We hope that you'll join us for these important events. Together, we can make South Dakota a more just and equitable place for everyone.</p>
              </v-card-text>
              <v-card-text>
          </v-card-text>
            <v-subheader>Upcoming Events</v-subheader>
            <v-calendar :events="eventList">
              <v-for="event in eventList" :key="event.name" :name="event.name" :start="event.start" :end="event.end"
                :location="event.location" :description="event.description" />
              <!-- <v-link :href="event.registerLink">Register</v-link> -->
              <template v-if="eventList.length === 0">
                <p>There are no upcoming events.</p>
              </template>
            </v-calendar>

          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card-title>Become a Sponsor<v-btn color="primary" dark class="mx-auto">Sponsor</v-btn></v-card-title>
          <v-card-text>These companies have demonstrated a high level of commitment to equality. Please consider supporting those that support us.
          </v-card-text>
          <v-carousel height="auto" width="100%" :cycle="true">
            
            <v-carousel-item>
              <v-card class="sponsor-card" style="display: flex; flex: 1" >
      <v-container>
        <img width="25%" height="315" src="@/assets/images/Nuwec.png" frameborder="0" allowfullscreen id="player">
      </v-container>

      <v-card-text>
        <span>Nuwec</span>
        <p style="margin-top: 20px">
          At Nuwec, we believe that data is the key to success in today's digital world. That's why we offer a comprehensive suite of data management and IT services to help clients of all sizes harness the power of their data to drive growth and innovation.
       </p>
      </v-card-text>
    </v-card>
            </v-carousel-item>

            <v-carousel-item>
              <v-card class="sponsor-card" style="display: flex; flex: 1">
      <v-container>
        <img width="25%" height="315" src="@/assets/images/Nuwec.png" frameborder="0" allowfullscreen id="player">
      </v-container>

      <v-card-text>
        <span>Nuwec</span>
        <p style="margin-top: 20px">
          At NuWec, we believe that data is the key to success in today's digital world. That's why we offer a comprehensive suite of data management and IT services to help clients of all sizes harness the power of their data to drive growth and innovation.
       </p>
      </v-card-text>
    </v-card>
            </v-carousel-item>

          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
  <v-col cols="12">
    <v-card>
      <v-card-title>Helpfull Links</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item link :to="{ href: 'https://www.un.org/en/global-issues/human-rights' }">
            <span>United Nations Human Rights</span>
          </v-list-item>
          <v-divider />
          <v-list-item link :to="{ href: 'https://www.humanrights.com/' }">
            <span>Human Rights</span>
          </v-list-item>
          <v-divider />
          <v-list-item link :to="{ href: 'https://www.hrc.org/' }">
            <span>Human Rights Campaign</span>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>


    </v-container>

  </v-app>
</template>

<style>@import '@/assets/style.css';</style>

<script>
export default {
  name: 'CarouselExample',
  data() {
    return {
      eventList: [
        {
          name: 'DAMA International Conference',
          start: '2023-10-16T09:00:00',
          end: '2023-10-18T17:00:00',
          location: 'Las Vegas, NV',
          description: 'The DAMA International Conference is the world\'s largest gathering of data management professionals.'
        },
        {
          name: 'DAMA SD Chapter Meeting',
          start: '2023-10-19T18:00:00',
          end: '2023-10-21T20:00:00',
          location: 'Houston, TX',
          description: 'The DAMA Houston Chapter Meeting is a monthly meeting for data management professionals in the Houston area.'
        }
      ]

    }
  }
}
</script>

