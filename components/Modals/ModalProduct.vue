<template>
  <transition duration="550" name="modal-fade">
    <div v-if="showing" class="backdrop" @click.self="close">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header id="modalTitle" class="modal__header">
          <slot name="header"> </slot>
          <button
            type="button"
            class="btn-close"
            aria-label="Close modal"
            @click="close"
          >
            x
          </button>
        </header>

        <section id="modalDescription" class="modal__body">
          <slot name="body"> </slot>
        </section>

        <footer class="modal__footer">
          <slot name="footer"> </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ModalProduct',
  props: {
    showing: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showing(isShowing) {
      if (isShowing) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
  },
  mounted() {
    window.addEventListener('keyup', this.handleKey)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handleKey)
  },
  methods: {
    close() {
      this.$emit('close')
    },
    handleKey(e) {
      if (e.key === 'Escape') {
        this.close()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/initial-variables';
@import '~/assets/sass/responsiveness';

.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  z-index: 5;
  @include md-breakpoints {
    padding: 0;
  }
}

.modal {
  z-index: 5;
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  @include md-breakpoints {
    max-width: $max-width-4xl;
  }

  &__header {
    padding: 15px;
    display: flex;
    font-weight: 500;
    align-items: center;
    position: relative;
    border-bottom: 3px solid #eeeeee;
    color: $orange;
    justify-content: space-between;
  }

  &__body {
    position: relative;
    padding: 20px 10px;
  }

  &__footer {
    border-top: 1px solid #eeeeee;
    text-align: right;
    padding: 10px 0;
  }
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 40px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: $orange;
  background: transparent;
}

.btn-green {
  color: white;
  background: $orange;
  border: 1px solid $orange;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-leave-active {
  transition-delay: 0.25s;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.modal-fade-enter .modal,
.modal-fade-leave-to .modal {
  transform: translateX(30px);
  opacity: 0.001;
}

.modal-fade-enter-active .modal,
.modal-fade-leave-active .modal {
  transition: all 0.3s ease-in-out;
}
.modal-fade-enter-active .modal {
  transition-delay: 0.25s;
}
</style>
