import memoize from 'memoize-one';

const filteredCompanies = memoize((state) => {
  const { data: { companies }, filters } = state;

  let filteredCompanies = companies;

  if (filters.name) {
    filteredCompanies = filteredCompanies.filter(
      c => c.name.toLocaleLowerCase().indexOf(filters.name.toLocaleLowerCase()) !== -1
    );
  }

  if (filters.specialties && filters.specialties.length) {
    filteredCompanies = filteredCompanies.filter(c => filters.specialties.every(s => c.specialties.includes(s)));
  }

  return filteredCompanies;
});

const filteredSpecialtiesWithCounts = memoize((state) => {
  const { data, filters } = state;

  let filteredSpecialties = data.specialties.map(s => ({
    value: s,
    isFiltered: filters.specialties.includes(s),
    count: 0
  }));
  console.log('spec')

  filteredCompanies(state)
    .flatMap(comp => comp['specialties'])
    .forEach(spec => filteredSpecialties.find(s => s.value === spec).count++);

  return filteredSpecialties;
});

export { filteredCompanies, filteredSpecialtiesWithCounts };
