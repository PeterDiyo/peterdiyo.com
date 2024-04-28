const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold text-gray-300">{title}</h4>
      <p className="mt-2 text-gray-400">{text}</p>
    </article>
  );
};
export default SkillsCard;
