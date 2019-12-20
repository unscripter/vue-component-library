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
        <keep-alive>
          <component :is="currentTabComponent" />
        </keep-alive>
        <Anchor :title="currentTab" :href="currentTab" class="active anchor" />
      </div>
    </div>
  </dynamic-tab-structure>
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
          active: true
        },
        {
          title: "counter",
          id: "counter",
          active: false
        },
        {
          title: "base-component",
          id: "base-component",
          active: false
        },
        {
          title: "tab-structure",
          id: "tab-structure",
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
  min-height: 500px;
}

.tabs-backgrouund {
  background-image: url("https://subtlepatterns.com/patterns/use_your_illusion.png");
  position: relative;
}

.anchor {
  height: 20px;
  padding: 15px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
}
</style>