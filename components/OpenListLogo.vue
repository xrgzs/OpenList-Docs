<!--
    Copyright (c) 2025 The OpenList Projects Contributors, 2022 云游君 YunYouJun
    Licensed under the MIT License.
    For full license text, see the LICENSE file in the project root
-->

<script lang="ts" setup>
import openListLogo from '../assets/logo.svg'
</script>

<template>
    <div class="openlist-logo-container" relative inline-flex justify="center" items="center">
        <div class="absolute bg-img" />
        <img class="fly-animation h-50" aspect="1" m="auto" :src="openListLogo" alt="OpenList Logo" z="1">
    </div>
</template>

<style lang="scss" scoped>
.openlist-logo-container {
    &:hover {
        .bg-img {
            opacity: 0.4;
        }
    }
}

.bg-img {
    border-radius: 50%;
    filter: blur(72px);
    max-width: 350px;
    width: 150%;
    height: 150%;
    // background-image: linear-gradient(-145deg, rgb(149, 255, 243) 30%, rgba(0, 172, 255, var(--un-to-opacity, 1)) 30%);
    opacity: 0.3;
    transition: opacity 0.2s;
}
</style>