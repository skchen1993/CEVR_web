<script>
const container = document.querySelector('.image-container_result');
const img1 = document.getElementById('img_result');
const img2 = document.getElementById('img_result');

container.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = container.getBoundingClientRect();
  const mouseX = e.clientX - left;
  const mouseY = e.clientY - top;

  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    // Mouse is inside the image region
    img1.style.opacity = '0';
    img2.style.opacity = '1';
  } else {
    // Mouse is outside the image region
    img1.style.opacity = '1';
    img2.style.opacity = '0';
  }
});
</script>