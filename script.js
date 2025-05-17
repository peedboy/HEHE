function pickRandom() {
  const number = Math.floor(Math.random() * 24) + 1;

  Swal.fire({
    title: '🎉 청소 당번 발표!',
    text: `오늘의 청소 당번은 ${number}번입니다!`,
    icon: 'success',
    confirmButtonText: '확인',
    confirmButtonColor: '#3085d6'
  });
}
