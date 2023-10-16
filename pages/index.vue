<template>
  <v-app dark
    :style="{ backgroundImage: 'url(@/assets/images/OIP.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: 0 }">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-carousel height="400" width="100%" :cycle="true">
  <v-carousel-item>
    <img src="@/assets/images/aaa.jpg" alt="Image 1" class="flex-shrink-0">

    <v-overlay>
      <v-container fluid>
              <v-card-text  class="text-center">
                <h1 :style="{ fontSize: '36px'}">DAMA South Dakota</h1>
                <p :style="{ marginTop: '10px' }">The DAMA South Dakota Chapter is dedicated to providing education, networking, and support to data management professionals in South Dakota.</p>
              </v-card-text>
      </v-container>
    </v-overlay>
  </v-carousel-item>

            <v-carousel-item>
              <img src="@/assets/images/bhbh.jpg" alt="Image 2" class="flex-shrink-0">
            </v-carousel-item>
            <v-carousel-item>
              <img src="@/assets/images/fish.jpg" alt="Image 3" class="flex-shrink-0">
            </v-carousel-item>
            <v-carousel-item>
              <img src="@/assets/images/sdsd.jpg" alt="Image 4" class="flex-shrink-0">
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
  <v-col cols="12">
    <v-card :style="{ display: 'flex', flex: 1 }">
      <v-card-image width="100%">
        <img src="@/assets/images/dwheel.jpg" alt="DAMA wheel" >
      </v-card-image>

      <v-card-text>
        <h1>DAMA Wheel</h1>
        <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management knowledge and skills required for data management professionals in 12 sections: Data Architecture, Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science, 
          Data Ethics, Data Literacy, and Data Culture.</p>
          <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to assess one's current skills and knowledge, identify areas for improvement, and develop a plan for professional development.
        </p>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12">
    <v-card>
      <v-card-title>Member Benefits</v-card-title>
      <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, qui! Impedit eos aut modi quam necessitatibus commodi expedita quis, inventore ullam iste dolore! Minus quisquam laudantium quaerat quidem delectus illo.</v-card-text>
    <v-row>
      <v-col cols="4">
        <v-card class="flex flex-wrap">
          <v-card-title>Student</v-card-title>
          <v-card-text>
            <ul>
              <li>Discounted membership fees</li>
              <li>Access to student-only events and resources</li>
              <li>Mentorship opportunities from experienced professionals</li>
            </ul>
          </v-card-text>
          <v-card__actions>
            <div class="flex align-self-center">
              <v-btn color="red" type="submit" class="mx-auto">Sign Up</v-btn>
            </div>
          </v-card__actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="flex flex-wrap">
          <v-card-title>Personal</v-card-title>
          <v-card-text>
            <ul>
              <li>Access to all member benefits</li>
              <li>Networking opportunities with other data professionals</li>
              <li>Discounts on training and certification programs</li>
            </ul>
          </v-card-text>
          <v-card__actions>
            <div class="flex align-self-center">
              <v-btn color="red" type="submit" class="mx-auto">Sign Up</v-btn>
            </div>
          </v-card__actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="flex flex-wrap">
          <v-card-title>Business</v-card-title>
          <v-card-text>
            <ul>
              <li>All the benefits of a personal membership</li>
              <li>Group discounts for your team</li>
              <li>Access to exclusive business resources</li>
            </ul>
          </v-card-text>
          <v-card__actions>
            <div class="flex align-self-center">
              <v-btn color="red" type="submit" class="mx-auto">Sign Up</v-btn>
            </div>
          </v-card__actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  </v-col>
</v-row>

      <v-row>
        <v-col cols="12">
          <v-card class="flex flex-wrap">
            <v-card-title>DAMA-South Dakota Events</v-card-title>
              <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus blanditiis libero repellendus iure eveniet ab harum delectus ea dicta. Similique nam voluptates repellat fugiat, praesentium hic iusto aut dolorum possimus.</v-card-text>
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
          <v-card>
            <v-card-title>Meet The DAMA-South Dakota Board Members</v-card-title>
          <v-carousel height="300" width="100%" :cycle="true">

  <v-carousel-item>
    <v-card :style="{ display: 'flex', flex: 1 }">
      <v-card-image width="100%">
        <img src="@/assets/images/face.jpg" alt="pres" >
      </v-card-image>

      <v-card-text>
        <h1>Chris Mahan</h1>
        <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management knowledge and skills required for data management professionals in 12 sections: Data Architecture, Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science, 
          Data Ethics, Data Literacy, and Data Culture.</p>
          <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to assess one's current skills and knowledge, identify areas for improvement, and develop a plan for professional development.
        </p>
      </v-card-text>
    </v-card>
  </v-carousel-item>

            <v-carousel-item>
              <v-card :style="{ display: 'flex', flex: 1 }">
      <v-card-image width="100%">
        <img src="@/assets/images/face.jpg" alt="pres" >
      </v-card-image>

      <v-card-text>
        <h1>Chris Mahan</h1>
        <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management knowledge and skills required for data management professionals in 12 sections: Data Architecture, Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science, 
          Data Ethics, Data Literacy, and Data Culture.</p>
          <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to assess one's current skills and knowledge, identify areas for improvement, and develop a plan for professional development.
        </p>
      </v-card-text>
    </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card :style="{ display: 'flex', flex: 1 }">
      <v-card-image width="100%">
        <img src="@/assets/images/face.jpg" alt="pres" >
      </v-card-image>

      <v-card-text>
        <h1>Chris Mahan</h1>
        <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management knowledge and skills required for data management professionals in 12 sections: Data Architecture, Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science, 
          Data Ethics, Data Literacy, and Data Culture.</p>
          <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to assess one's current skills and knowledge, identify areas for improvement, and develop a plan for professional development.
        </p>
      </v-card-text>
    </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card :style="{ display: 'flex', flex: 1 }">
      <v-card-image width="100%">
        <img src="@/assets/images/face.jpg" alt="pres" >
      </v-card-image>

      <v-card-text>
        <h1>Chris Mahan</h1>
        <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management knowledge and skills required for data management professionals in 12 sections: Data Architecture, Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science, 
          Data Ethics, Data Literacy, and Data Culture.</p>
          <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to assess one's current skills and knowledge, identify areas for improvement, and develop a plan for professional development.
        </p>
      </v-card-text>
    </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>
@import '@/assets/style.css';
</style>

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
