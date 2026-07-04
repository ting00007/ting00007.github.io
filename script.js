const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();

const wechatLink = document.querySelector('.social.wechat');
wechatLink.href = 'weixin://dl/chat?wxid_vcxhyy6dwnyd12';
wechatLink.setAttribute('aria-label', 'Open WeChat for TT Family, ID wxid_vcxhyy6dwnyd12');
wechatLink.querySelector('span').textContent = 'WeChat · wxid_vcxhyy6dwnyd12';

const lineLink = document.querySelector('.social.line');
lineLink.href = 'https://line.me/ti/p/~ting000007';
lineLink.target = '_blank';
lineLink.rel = 'noopener';
lineLink.setAttribute('aria-label', 'Open LINE profile ting000007');
lineLink.querySelector('span').textContent = 'LINE · ting000007';

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('TT Family homestay enquiry');
  const body = encodeURIComponent(
    `Parent / guardian: ${data.get('name')}\n` +
    `Email: ${data.get('email')}\n` +
    `Student / school details: ${data.get('student') || 'Not provided'}\n\n` +
    `Message:\n${data.get('message') || 'I would like to learn more about TT Family.'}`
  );
  const toast = document.querySelector('.toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
  window.location.href = `mailto:bch_oon@yahoo.com?subject=${subject}&body=${body}`;
});
