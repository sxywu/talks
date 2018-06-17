pt.aboutUs = pt.aboutUs || {};

pt.aboutUs.init = () => {
  const timelineData = [
    {date: new Date('10-1-2015'), text: `Met online in a data visualization
    <img src='slides/slide_03/slack.png' height='32px'/>`},
    {date: new Date('01-1-2016'), text: 'Both talk proposals accepted to OpenVis Conf'},
    {date: new Date('04-23-2016'), text: 'OpenVis Conf 2016'},
    {date: new Date('06-1-2016'), text: 'S: "do you want to collaborate?"<br />N: "yes!"'},
    {date: new Date('09-22-2016'), text: 'Project public launch'},
    {date: new Date('04-23-2017'), text: 'Invited back to OpenVis Conf 2017'}
  ];
  const years = [
    {date: new Date('1-1-2016'), text: '2016'},
    {date: new Date('1-1-2017'), text: '2017'},
    {date: new Date(), text: 'today'}
  ];

  const left = 50;
  const height = 1080 * 0.8;
  const timeScale = d3.scaleTime()
    .domain([new Date('9-15-2015'), new Date()])
    .range([0, height]);
  const axis = d3.axisLeft()
    .scale(timeScale)
    .tickPadding(5)
    .tickSizeOuter(0)
    .tickFormat(d => d.getMonth() === 0 ? d.getFullYear() : d3.timeFormat('%b')(d));

  const container = d3.select('#about-us');

  const svg = container.select('svg')
    .style('position', 'absolute')
    .style('width', '100%')
    .style('height', `${height}px`)
    .style('overflow', 'visible');
  svg.selectAll('*').remove();
  const axisG = svg.append('g')
    .attr('transform', `translate(${left}, 0)`)
    .call(axis);
  axisG.selectAll('text')
    .attr('class', 'quicksand')
    .style('fill', d => d.getMonth() === 0 ? '#f5c2b1' : '#33383b')
    .style('font-size', d => d.getMonth() === 0 ? '32px' : '18px');
  svg.append('text')
    .attr('transform', `translate(${left}, ${height})`)
    .attr('text-anchor', 'middle')
    .attr('dy', '1.35em')
    .classed('kingBasil', true)
    .style('fill', '#f5c2b1')
    .style('font-size', '48px')
    .text('today');

  const timelineItems = container.selectAll('.timeline-item')
    .data(timelineData)
    .style('left', `${left - 5}px`)
    .style('top', d => `${timeScale(d.date)}px`);

  timelineItems.selectAll('*').remove();

  // add a dot
  timelineItems.append('div')
    .style('display', 'inline-block')
    .style('width', '10px')
    .style('height', '10px')
    .style('border-radius', '10px')
    .style('background-color', '#f5c2b1');

  // add text
  timelineItems.append('div')
    .style('display', 'inline-block')
    .style('vertical-align', 'top')
    .style('margin', '0 10px')
    .style('width', '90%')
    .html(d => d.text);

}
