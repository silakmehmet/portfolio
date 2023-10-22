export default async function getData(lang, path) {
  const response = await fetch(
    `https://portfolio-4f414-default-rtdb.firebaseio.com/${lang}/${path}.json`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }
  const data = await response.json();
  if (path === "certificates") {
    const certificates = [];
    for (const key in data) {
      certificates.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
        url: data[key].url,
      });
    }
    return certificates;
  } else if (path === "projects") {
    const projects = [];
    for (const key in data) {
      projects.push({
        id: key,
        title: data[key].title,
        code: data[key].code,
        description: data[key].description,
        demo: data[key].demo,
        image: data[key].image,
        skills: data[key].skills,
      });
    }
    return projects;
  }
}
