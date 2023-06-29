type ResultProps = {
  activeButton: string | null;
};

export default function Result({ activeButton }: ResultProps) {
  switch (activeButton) {
    case 'Mitsubishi':
      return <div>Hasil 1</div> 
    case 'Abc':
      return <div>Hasil 2</div>;
    case 'Def':
      return <div>Hasil 3a</div>;
    case 'Drea':
      return <div>Hasil 3f</div>;
    case 'Kill':
      return <div>Hasil 3b</div>;
    case 'Reas':
      return <div>Hasil 3sdfb</div>;
    case 'Mnb':
      return <div>Hasil 3sdgsgdhfs</div>;
    default:
      return null;
  }
};
