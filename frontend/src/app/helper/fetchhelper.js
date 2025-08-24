export const fetchBlogs = async (ENDPOINT) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(`${ENDPOINT}`, reqOptions);
  const response = await request.json();
  return response;
};

export const fetchProjects = async (ENDPOINT) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(`${ENDPOINT}`, reqOptions);
  const response = await request.json();
  return response;
};
