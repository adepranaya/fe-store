<template>
  <elements-container-app class="flex justify-center items-center">
    <div>
      <img
        src="~/assets/static/illustrations/undraw_empty.svg"
        alt="Empty"
        width="500"
      />
      <br />
      <p class="text-center">
        <slot></slot>
      </p>
      <br />
    </div>
  </elements-container-app>
</template>
