
export function currency(x: number) {
    if (x > 0) {
      return `£${x.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  
    } else return '0';
  }

export function percentage(x: number) {
  return `${x}%`;
}