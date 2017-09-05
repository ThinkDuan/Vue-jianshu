<template>
    <div>
        <tab-list></tab-list>
        <content-list></content-list>
    </div>
</template>
<script>
import TabList from './children/tabList'
import ContentList from './children/contentList'
export default {
  components: {
    TabList,
    ContentList
  }
}
</script>
