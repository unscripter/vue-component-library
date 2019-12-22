<template>
  <v-dynamic-tab-structure v-model="tabs">
    <div slot-scope="{ tabs, switchTab, currentTab, currentTabComponent }" class="tabs-backgrouund">
      <div>
        <ul>
          <li
            v-for="(tab, index) in tabs"
            :key="tab.id"
            @click="switchTab(index)"
            :class="[tab.active ? 'active' : 'no-active']"
          >{{ tab.name }}</li>
        </ul>
      </div>
      <div class="dynamic-area">
        <keep-alive>
          <component :is="currentTabComponent" />
        </keep-alive>
        <v-anchor :title="currentTab" :href="currentTab" class="active anchor1" />
      </div>
    </div>
  </v-dynamic-tab-structure>
</template>

<script>
export default {
  name: "dynamic-tab",
  data() {
    return {
      tabs: [
        {
          title: "input-tags",
          id: "input-tags",
          active: true,
          name: "Input Tags"
        },
        {
          title: "counter",
          id: "counter",
          active: false,
          name: "Counter"
        },
        {
          title: "base-component",
          id: "base-component",
          active: false,
          name: "Base Component"
        },
        {
          title: "modal",
          id: "modal",
          active: false,
          name: "Modal"
        },
        {
          title: "base-anchor",
          id: "base-anchor",
          active: false,
          name: "Base Anchor"
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

li {
  display: block;
  float: left;
  padding: 12px 20px;
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: white;
}
.active {
  background-color: #4ec6de;
}
.no-active {
  background-color: transparent;
}

.dynamic-area {
  padding: 40px;
  border: 3px solid #4ec6de;
  min-height: 500px;
}

.tabs-backgrouund {
  background-image: url("https://subtlepatterns.com/patterns/use_your_illusion.png");
  position: relative;
}

.anchor1 {
  height: 20px;
  padding: 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  line-height: 5px;
}
</style>