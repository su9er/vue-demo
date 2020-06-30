<template>
  <div class="adjoin-wrapper">
    <div class="adjoin">
      <div v-for="(specs, index) in commoditySpecs" :key="specs.title">
        <h1>{{specs.title}}</h1>
        <div class="wrap">
          <template>
            <span
              v-for="item in specs.list"
              :class="{
                'option': optionSpecs.indexOf(item) > -1,
                'active': specsS.indexOf(item) > -1
              }"
              :key="item"
              @click="() => handleClick(optionSpecs.indexOf(item) > -1, item, index)">{{item}}</span>
          </template>
        </div>
      </div>
    </div>
    <div>
      <h1>可选型号：</h1>
      <div v-for="item in data" :key="item.id">{{item.specs.join(', ')}}</div>
    </div>
  </div>
</template>

<script>
import ShopAdjoin from '../utils/shopAdjoin'

const data = [
  { id: '1', specs: [ '紫色', '套餐一', '64G' ] },
  { id: '2', specs: [ '紫色', '套餐一', '128G' ] },
  { id: '3', specs: [ '紫色', '套餐二', '128G' ] },
  { id: '4', specs: [ '黑色', '套餐三', '256G' ] },
]
const commoditySpecs = [
  { title: '颜色', list: [ '红色', '紫色', '白色', '黑色' ] },
  { title: '套餐', list: [ '套餐一', '套餐二', '套餐三', '套餐四' ]},
  { title: '内存', list: [ '64G', '128G', '256G' ] }
]

export default {
  name: 'adjoin',
  data() {
    return {
      data: Object.freeze(data),
      commoditySpecs: Object.freeze(commoditySpecs),
      optionSpecs: [],
      specsS: [],
      shopAdjoin: null
    }
  },
  created() {
    this.specsS = Array.from({ length: commoditySpecs.length })
    this.shopAdjoin = new ShopAdjoin(commoditySpecs, data)
    // 获得可选项表
    this.optionSpecs = this.shopAdjoin.querySpecsOptions(this.specsS)
    // eslint-disable-next-line no-console
    console.log(this.optionSpecs)
    this.log()
  },
  methods: {
    handleClick(bool, text, index) {
      if (this.specsS[index] !== text && !bool) return
      this.specsS.splice(index, 1, this.specsS[index] === text ? '' : text)
      this.optionSpecs = this.shopAdjoin.querySpecsOptions(this.specsS)
      // eslint-disable-next-line no-console
      console.log(this.specsS)
    },
    log() {
      const len = this.shopAdjoin.quantity
      const rows = Array.from({length: len})
      for (let i = 0; i < len; i++) {
        const obj = {}
        obj['index'] = this.shopAdjoin.vertex[i]
        for (let j = 0; j < len; j++) {
          obj[this.shopAdjoin.vertex[j]] = this.shopAdjoin.adjoinArray[i * len + j] || ''
        }
        rows[i] = obj
      }
      // eslint-disable-next-line no-console
      console.table(rows)
    }
  }
}
</script>

<style scoped>
  .adjoin-wrapper {
    display: flex;
    justify-content: center;
    text-align: left;
  }
  .wrap span {
    margin: 0 10px;
    cursor: pointer;
    color: #999;
  }
  .wrap span.option {
    color: #000;
  }
  .wrap span.active {
    color: #fff;
    background-color: cadetblue;
  }
</style>
