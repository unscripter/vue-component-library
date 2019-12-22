<template>
  <dynamic-tab-structure v-model="tabs">
    <div slot-scope="{ tabs, switchTab, currentTab, currentTabComponent }" class="tabs-backgrouund">
      <div>
        <ul>
          <li
            v-for="(tab, index) in tabs"
            :key="tab.id"
            @click="switchTab(index)"
            :class="[tab.active ? 'active' : 'no-active']"
          >{{ tab.title }}</li>
        </ul>
      </div>
      <div class="dynamic-area">
        <component :is="currentTabComponent" />
      </div>
    </div>
  </dynamic-tab-structure>
</template>

<script>
export default {
  name: "tab-structure",
  data() {
    return {
      tabs: [
        {
          title: "v-input-tags",
          id: "input-tags",
          active: true
        },
        {
          title: "v-counter",
          id: "counter",
          active: false
        },
        {
          title: "v-modal",
          id: "modal",
          active: false
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
  min-height: 300px;
}

.tabs-backgrouund {
  background-image: url("https://subtlepatterns.com/patterns/use_your_illusion.png");
}
</style>