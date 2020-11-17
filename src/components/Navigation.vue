<template>
  <!--  BEGIN SIDEBAR  -->
  <div class="sidebar-wrapper sidebar-theme">
    <nav id="sidebar">
      <div class="shadow-bottom"></div>
      <ul class="list-unstyled menu-categories">
        <li class="menu">
          <router-link
            @click.native="
              expanded = !expanded
              current = 1
            "
            to="/"
            :data-active="current === 1"
            :aria-expanded="current === 1 ? 'true' : 'false'"
            data-toggle="collapse"
            class="dropdown-toggle"
            :class="current === 1 ? '' : 'collapsed'"
          >
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M4,12h5c0.552,0,1-0.448,1-1V4c0-0.552-0.448-1-1-1H4C3.448,3,3,3.448,3,4v7C3,11.552,3.448,12,4,12z"
                  opacity=".3"
                ></path>
                <path
                  d="M15,8h5c0.552,0,1-0.448,1-1V4c0-0.552-0.448-1-1-1h-5c-0.552,0-1,0.448-1,1v3C14,7.552,14.448,8,15,8	z"
                  opacity=".3"
                ></path>
                <path
                  d="M4,21h5c0.552,0,1-0.448,1-1v-3c0-0.552-0.448-1-1-1H4c-0.552,0-1,0.448-1,1v3C3,20.552,3.448,21,4,21	z"
                  opacity=".3"
                ></path>
                <path
                  d="M15,21h5c0.552,0,1-0.448,1-1v-7c0-0.552-0.448-1-1-1h-5c-0.552,0-1,0.448-1,1v7	C14,20.552,14.448,21,15,21z"
                  opacity=".3"
                ></path>
                <path
                  d="M9,13H4c-1.103,0-2-0.897-2-2V4c0-1.103,0.897-2,2-2h5c1.103,0,2,0.897,2,2v7C11,12.103,10.103,13,9,13z M4,4v7h5V4H4z"
                ></path>
                <path
                  d="M20,9h-5c-1.103,0-2-0.897-2-2V4c0-1.103,0.897-2,2-2h5c1.103,0,2,0.897,2,2v3C22,8.103,21.103,9,20,9z M15,4v3h5V4H15z"
                ></path>
                <path
                  d="M9,22H4c-1.103,0-2-0.897-2-2v-3c0-1.103,0.897-2,2-2h5c1.103,0,2,0.897,2,2v3C11,21.103,10.103,22,9,22z M4,17v3h5v-3H4z"
                ></path>
                <path
                  d="M20,22h-5c-1.103,0-2-0.897-2-2v-7c0-1.103,0.897-2,2-2h5c1.103,0,2,0.897,2,2v7C22,21.103,21.103,22,20,22z M15,13v7h5v-7	H15z"
                ></path>
              </svg>
              <span>Dashboard</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <a
            @click="
              expanded = !expanded
              current = 2
            "
            :data-active="current === 2"
            :aria-expanded="current === 2 && expanded ? 'true' : 'false'"
            data-toggle="collapse"
            class="dropdown-toggle"
            :class="current === 2 && expanded ? '' : 'collapsed'"
          >
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M 12 2 C 12 2 8 3 8 7 C 8 9.209 9.791 11 12 11 C 14.209 11 16 9.209 16 7 C 16 4.357 13.817 3.5019531 13 3.5019531 L 12 2 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 15.508 15.004 14 12 14 z"
                ></path>
              </svg>
              <span>Setup</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>
          <ul
            class="submenu list-unstyled collapse"
            :class="current === 2 && expanded ? 'show' : ''"
            style=""
          >
            <li>
              <router-link to="/customers"> Customers </router-link>
            </li>
            <li>
              <router-link to="/vendors"> Vendors </router-link>
            </li>
            <li>
              <router-link to="/vehicles"> Vehicles </router-link>
            </li>
            <li>
              <router-link to="/drivers"> Drivers </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- <div class="shadow-bottom"></div> -->
    </nav>
  </div>
  <!--  END SIDEBAR  -->
</template>

<script>
export default {
  name: 'navigation',
  props: [],
  data() {
    return {
      current: 1,
      expanded: false,
    }
  },
}
</script>

<style></style>
