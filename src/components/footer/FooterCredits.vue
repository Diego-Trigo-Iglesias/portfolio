<template>
  <div class="footer-credits">
    <p>&copy; {{ new Date().getFullYear() }} Diego Trigo Iglesias</p>
    <p class="footer-credits-attribution">
      Concepto y escena 3D originales de
      <a href="https://david-hckh.com" target="_blank" rel="noopener noreferrer" class="footer-link">
        David Heckhoff
      </a>
    </p>
  </div>
</template>

<style scoped lang="scss">
.footer-credits {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  font-size: var(--font-size-sm);
  text-align: center;

  &-built {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-xxs);
  }
}

.footer-credits-attribution {
  font-size: var(--font-size-xs, 0.75rem);
  opacity: 0.6;
}

.footer-link {
  font-weight: 700;
}
</style>
