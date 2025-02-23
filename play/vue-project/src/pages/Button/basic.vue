<template>
  <div class="box-default">
    <div>
      <y-button size="small"></y-button>
      <y-button size="default"></y-button>
      <y-button size="large"></y-button>
    </div>
    <div>
      <y-button size="small" type="outline"></y-button>
      <y-button
        size="default"
        type="outline"
        @click="() => console.log('被你发现这里偷偷加了click事件了')"
      ></y-button>
      <y-button size="large" type="outline"></y-button>
    </div>
    <div>
      <y-button size="small" type="text"></y-button>
      <y-button size="default" type="text"></y-button>
      <y-button size="large" type="text"></y-button>
    </div>
    <div>
      <y-button status="success"></y-button>
      <y-button status="success" type="secondary"></y-button>
      <y-button status="success" type="outline"></y-button>
      <y-button status="success" type="text"></y-button>
    </div>
    <div>
      <y-button status="warning"></y-button>
      <y-button status="warning" type="secondary"></y-button>
      <y-button status="warning" type="outline"></y-button>
      <y-button status="warning" type="text"></y-button>
    </div>
    <div>
      <y-button status="danger"></y-button>
      <y-button status="danger" type="secondary"></y-button>
      <y-button status="danger" type="outline"></y-button>
      <y-button status="danger" type="text"></y-button>
    </div>
  </div>
</template>
