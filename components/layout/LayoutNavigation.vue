<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/">
              <LayoutLogo class="block w-auto h-8 text-red-600 lg:hidden" />
              <LayoutLogo class="hidden w-auto h-8 text-red-600 lg:block" />
            </NuxtLink>
          </div>
          <div class="hidden sm:flex sm:-my-px sm:ml-6 sm:space-x-8">
            <NuxtLink
              :to="{ name: 'index' }"
              exact
              active-class="border-red-500 hover:border-red-500"
              class="
                inline-flex
                items-center
                pt-1
                px-1
                hover:text-gray-700
                text-gray-900 text-sm
                font-medium
                border-b-2
                hover:border-gray-300
                border-transparent
              "
            >
              Home
            </NuxtLink>

            <NuxtLink
              :to="{ name: 'about' }"
              active-class="border-red-500 hover:border-red-500"
              class="
                inline-flex
                items-center
                pt-1
                px-1
                hover:text-gray-700
                text-gray-900 text-sm
                font-medium
                border-b-2
                hover:border-gray-300
                border-transparent
              "
            >
              About
            </NuxtLink>
          </div>
        </div>
        <div class="hidden sm:flex sm:items-center sm:ml-6">
          <button
            class="
              p-1
              text-gray-400
              hover:text-gray-500
              bg-white
              rounded-full
              focus:outline-none
              focus:ring-red-500 focus:ring-offset-2 focus:ring-2
            "
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: bell -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button
                id="user-menu"
                class="
                  flex
                  items-center
                  max-w-xs
                  text-sm
                  bg-white
                  rounded-full
                  focus:outline-none
                  focus:ring-red-500 focus:ring-offset-2 focus:ring-2
                "
                aria-haspopup="true"
                @click="menuOpen = !menuOpen"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              class="
                absolute
                right-0
                mt-2
                py-1
                w-48
                bg-white
                rounded-md
                shadow-lg
                origin-top-right
                ring-black ring-opacity-5 ring-1
              "
              :class="{ 'sm:hidden': !menuOpen, 'sm:block': menuOpen }"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
                role="menuitem"
              >
                Your Profile
              </a>

              <a
                href="#"
                class="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
                role="menuitem"
              >
                Settings
              </a>

              <a
                href="#"
                class="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center -mr-2 sm:hidden">
          <!-- Mobile menu button -->
          <button
            class="
              inline-flex
              items-center
              justify-center
              p-2
              text-gray-400
              hover:text-gray-500
              hover:bg-gray-100
              bg-white
              rounded-md
              focus:outline-none
              focus:ring-red-500 focus:ring-offset-2 focus:ring-2
            "
            @click="menuOpen = !menuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div
      class="absolute z-50 left-0 right-0 bg-white shadow-lg sm:hidden"
      :class="{ hidden: !menuOpen }"
    >
      <div class="pb-3 pt-2 space-y-1">
        <NuxtLink
          :to="{ name: 'index' }"
          exact
          active-class="border-l-4 border-red-500 bg-red-50 hover:border-red-500 hover:bg-red-50"
          class="
            block
            pl-3
            pr-4
            py-2
            text-gray-600
            hover:text-gray-800
            text-base
            font-medium
            hover:bg-gray-50
            border-l-4
            hover:border-gray-300
            border-transparent
          "
        >
          Home
        </NuxtLink>

        <NuxtLink
          :to="{ name: 'about' }"
          exact
          active-class="border-l-4 border-red-500 bg-red-50 hover:border-red-500 hover:bg-red-50"
          class="
            block
            pl-3
            pr-4
            py-2
            text-gray-600
            hover:text-gray-800
            text-base
            font-medium
            hover:bg-gray-50
            border-l-4
            hover:border-gray-300
            border-transparent
          "
        >
          About
        </NuxtLink>
      </div>
      <div class="pb-3 pt-4 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-gray-800 text-base font-medium">Tom Cook</div>
            <div class="text-gray-500 text-sm font-medium">tom@example.com</div>
          </div>
          <button
            class="
              flex-shrink-0
              ml-auto
              p-1
              text-gray-400
              hover:text-gray-500
              bg-white
              rounded-full
              focus:outline-none
              focus:ring-red-500 focus:ring-offset-2 focus:ring-2
            "
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: bell -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <a
            href="#"
            class="
              block
              px-4
              py-2
              text-gray-500
              hover:text-gray-800
              text-base
              font-medium
              hover:bg-gray-100
            "
          >
            Your Profile
          </a>

          <a
            href="#"
            class="
              block
              px-4
              py-2
              text-gray-500
              hover:text-gray-800
              text-base
              font-medium
              hover:bg-gray-100
            "
          >
            Settings
          </a>

          <a
            href="#"
            class="
              block
              px-4
              py-2
              text-gray-500
              hover:text-gray-800
              text-base
              font-medium
              hover:bg-gray-100
            "
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  watch: {
    $route() {
      this.menuOpen = false
    },
  },
}
</script>
