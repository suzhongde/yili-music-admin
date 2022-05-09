import { ref } from 'vue';

export const useToggleDialog = () => {
  const show = ref(false);
    show.value = false;
  };

  const showDialog = () => {
    show.value = true;
  };

  return {
    showDialog,
    hideDialog,
    show
  };
};
