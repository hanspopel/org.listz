import React from 'react';
import data from './gfgeidafabghacehbdaa.csv';
import { CsvToHtmlTable } from 'react-csv-to-table';

const sampleData = `Model,mpg,cyl,disp,hp,drat,wt,qsec,vs,am,gear,carb Mazda RX4,21,6,160,110,3.9,2.62,16.46,0,1,4,4 Mazda RX4 Wag,21,6,160,110,3.9,2.875,17.02,0,1,4,4 Datsun 710,22.8,4,108,93,3.85,2.32,18.61,1,1,4,1 Hornet 4 Drive,21.4,6,258,110,3.08,3.215,19.44,1,0,3,1 Hornet Sportabout,18.7,8,360,175,3.15,3.44,17.02,0,0,3,2 Valiant,18.1,6,225,105,2.76,3.46,20.22,1,0,3,1 Duster 360,14.3,8,360,245,3.21,3.57,15.84,0,0,3,4 Merc 240D,24.4,4,146.7,62,3.69,3.19,20,1,0,4,2 Merc 230,22.8,4,140.8,95,3.92,3.15,22.9,1,0,4,2 Merc 280,19.2,6,167.6,123,3.92,3.44,18.3,1,0,4,4 Merc 280C,17.8,6,167.6,123,3.92,3.44,18.9,1,0,4,4 Merc 450SE,16.4,8,275.8,180,3.07,4.07,17.4,0,0,3,3 Merc 450SL,17.3,8,275.8,180,3.07,3.73,17.6,0,0,3,3 Merc 450SLC,15.2,8,275.8,180,3.07,3.78,18,0,0,3,3 Cadillac Fleetwood,10.4,8,472,205,2.93,5.25,17.98,0,0,3,4 Lincoln Continental,10.4,8,460,215,3,5.424,17.82,0,0,3,4 Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4 Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1`;

export default class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        data: data,
    };
  }

  render() {



    return (

      <div class="d-flex justify-content-center listz-page " >
<div class="w-75 page-div" >
        <div class="" background-color="yellow">
        <table class="table table-bordered table-hover table-condensed" >
<thead><tr><th title="Field #1">0</th>
<th title="Field #2">Presidency[a]</th>
<th title="Field #3">FIELD3</th>
<th title="Field #4">President</th>
<th title="Field #5">FIELD5</th>
<th title="Field #6">Party[b]</th>
<th title="Field #7">FIELD7</th>
<th title="Field #8">Election</th>
<th title="Field #9">Vice President</th>
</tr></thead>
<tbody><tr>
<td align="right">1</td>
<td align="right">1
</td>
<td>April 30, 1789–March 4, 1797<br/></td>
<td><br/></td>
<td>George Washington<br/></td>
<td><br/></td>
<td>Unaffiliated<br/></td>
<td>1788–89<br/>1792<br/></td>
<td>John Adams[c]<br/></td>
</tr>
<tr>
<td align="right">2</td>
<td align="right">2
</td>
<td>March 4, 1797–March 4, 1801<br/></td>
<td><br/></td>
<td>John Adams<br/></td>
<td><br/></td>
<td>Federalist<br/></td>
<td>1796<br/></td>
<td>Thomas Jefferson[d]<br/></td>
</tr>
<tr>
<td align="right">3</td>
<td align="right">3
</td>
<td>March 4, 1801–March 4, 1809<br/></td>
<td><br/></td>
<td>Thomas Jefferson<br/></td>
<td><br/></td>
<td>Democratic-Republican<br/></td>
<td>1800<br/>1804<br/></td>
<td>Aaron Burr<br/>George Clinton[e]<br/><br/><br/></td>
</tr>
<tr>
<td align="right">4</td>
<td align="right">4
</td>
<td>March 4, 1809–March 4, 1817<br/></td>
<td><br/></td>
<td>James Madison<br/></td>
<td><br/></td>
<td>Democratic-Republican<br/></td>
<td>1808<br/>1812<br/></td>
<td>George Clinton[e]<br/><br/><br/>Vacant afterApr. 20, 1812<br/>Elbridge Gerry[e]<br/>Vacant afterNov. 23, 1814<br/></td>
</tr>
<tr>
<td align="right">5</td>
<td align="right">5
</td>
<td>March 4, 1817–March 4, 1825<br/></td>
<td><br/></td>
<td>James Monroe<br/></td>
<td><br/></td>
<td>Democratic-Republican<br/></td>
<td>1816<br/>1820<br/></td>
<td>Daniel D. Tompkins<br/></td>
</tr>
<tr>
<td align="right">6</td>
<td align="right">6
</td>
<td>March 4, 1825–March 4, 1829<br/></td>
<td><br/></td>
<td>John Quincy Adams<br/></td>
<td><br/><br/></td>
<td>Democratic-Republican[f]<br/>National Republican<br/></td>
<td>1824<br/></td>
<td>John C. Calhoun[g][h]<br/></td>
</tr>
<tr>
<td align="right">7</td>
<td align="right">7
</td>
<td>March 4, 1829–March 4, 1837<br/></td>
<td><br/></td>
<td>Andrew Jackson<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1828<br/>1832<br/></td>
<td>John C. Calhoun[g][h]<br/><br/>National Republican<br/>Vacant afterDec. 28, 1832<br/>Martin Van Buren<br/></td>
</tr>
<tr>
<td align="right">8</td>
<td align="right">8
</td>
<td>March 4, 1837–March 4, 1841<br/></td>
<td><br/></td>
<td>Martin Van Buren<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1836<br/></td>
<td>Richard Mentor Johnson<br/></td>
</tr>
<tr>
<td align="right">9</td>
<td align="right">9
</td>
<td>March 4, 1841–April 4, 1841<br/></td>
<td><br/></td>
<td>William Henry Harrison[e]<br/></td>
<td><br/></td>
<td>Whig<br/></td>
<td>1840<br/></td>
<td>John Tyler<br/></td>
</tr>
<tr>
<td align="right">10</td>
<td align="right">10
</td>
<td>April 4, 1841[i]–March 4, 1845<br/></td>
<td><br/></td>
<td>John Tyler<br/></td>
<td><br/><br/></td>
<td>Whig[j]<br/>Unaffiliated<br/></td>
<td>1840<br/>John Tyler<br/></td>
<td>Vacant throughoutpresidency<br/></td>
</tr>
<tr>
<td align="right">11</td>
<td align="right">11
</td>
<td>March 4, 1845–March 4, 1849<br/></td>
<td><br/></td>
<td>James K. Polk<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1844<br/></td>
<td>George M. Dallas<br/></td>
</tr>
<tr>
<td align="right">12</td>
<td align="right">12
</td>
<td>March 4, 1849–July 9, 1850<br/></td>
<td><br/></td>
<td>Zachary Taylor[e]<br/></td>
<td><br/></td>
<td>Whig<br/></td>
<td>1848<br/></td>
<td>Millard Fillmore<br/></td>
</tr>
<tr>
<td align="right">13</td>
<td align="right">13
</td>
<td>July 9, 1850[k]–March 4, 1853<br/></td>
<td><br/></td>
<td>Millard Fillmore<br/></td>
<td><br/></td>
<td>Whig<br/></td>
<td>1848<br/>Millard Fillmore<br/></td>
<td>Vacant throughoutpresidency<br/></td>
</tr>
<tr>
<td align="right">14</td>
<td align="right">14
</td>
<td>March 4, 1853–March 4, 1857<br/></td>
<td><br/></td>
<td>Franklin Pierce<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1852<br/></td>
<td>William R. King[e]<br/>Vacant afterApr. 18, 1853<br/></td>
</tr>
<tr>
<td align="right">15</td>
<td align="right">15
</td>
<td>March 4, 1857–March 4, 1861<br/></td>
<td><br/></td>
<td>James Buchanan<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1856<br/></td>
<td>John C. Breckinridge<br/></td>
</tr>
<tr>
<td align="right">16</td>
<td align="right">16
</td>
<td>March 4, 1861–April 15, 1865<br/></td>
<td><br/></td>
<td>Abraham Lincoln[l]<br/></td>
<td><br/><br/></td>
<td>Republican<br/>National Union[m]<br/></td>
<td>1860<br/>1864<br/></td>
<td>Hannibal Hamlin<br/>Andrew Johnson<br/></td>
</tr>
<tr>
<td align="right">17</td>
<td align="right">17
</td>
<td>April 15, 1865–March 4, 1869<br/></td>
<td><br/></td>
<td>Andrew Johnson<br/></td>
<td><br/><br/></td>
<td>National Union[n]<br/>Democratic<br/></td>
<td>1864<br/>Andrew Johnson<br/></td>
<td>Vacant throughoutpresidency<br/></td>
</tr>
<tr>
<td align="right">18</td>
<td align="right">18
</td>
<td>March 4, 1869–March 4, 1877<br/></td>
<td><br/></td>
<td>Ulysses S. Grant<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1868<br/>1872<br/></td>
<td>Schuyler Colfax<br/>Henry Wilson[e]<br/>Vacant afterNov. 22, 1875<br/></td>
</tr>
<tr>
<td align="right">19</td>
<td align="right">19
</td>
<td>March 4, 1877–March 4, 1881<br/></td>
<td><br/></td>
<td>Rutherford B. Hayes<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1876<br/></td>
<td>William A. Wheeler<br/></td>
</tr>
<tr>
<td align="right">20</td>
<td align="right">20
</td>
<td>March 4, 1881–September 19, 1881<br/></td>
<td><br/></td>
<td>James A. Garfield[o]<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1880<br/></td>
<td>Chester A. Arthur<br/></td>
</tr>
<tr>
<td align="right">21</td>
<td align="right">21
</td>
<td>September 19, 1881[p]–March 4, 1885<br/></td>
<td><br/></td>
<td>Chester A. Arthur<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1880<br/>Chester A. Arthur<br/></td>
<td>Vacant throughoutpresidency<br/></td>
</tr>
<tr>
<td align="right">22</td>
<td align="right">22
</td>
<td>March 4, 1885–March 4, 1889<br/></td>
<td><br/></td>
<td>Grover Cleveland<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1884<br/></td>
<td>Thomas A. Hendricks[e]<br/>Vacant afterNov. 25, 1885<br/></td>
</tr>
<tr>
<td align="right">23</td>
<td align="right">23
</td>
<td>March 4, 1889–March 4, 1893<br/></td>
<td><br/></td>
<td>Benjamin Harrison<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1888<br/></td>
<td>Levi P. Morton<br/></td>
</tr>
<tr>
<td align="right">24</td>
<td align="right">24
</td>
<td>March 4, 1893–March 4, 1897<br/></td>
<td><br/></td>
<td>Grover Cleveland<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1892<br/></td>
<td>Adlai Stevenson I<br/></td>
</tr>
<tr>
<td align="right">25</td>
<td align="right">25
</td>
<td>March 4, 1897–September 14, 1901<br/></td>
<td><br/></td>
<td>William McKinley[q]<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1896<br/>1900<br/></td>
<td>Garret Hobart[e]<br/>Vacant afterNov. 21, 1899<br/>Theodore Roosevelt<br/></td>
</tr>
<tr>
<td align="right">26</td>
<td align="right">26
</td>
<td>September 14, 1901–March 4, 1909<br/></td>
<td><br/></td>
<td>Theodore Roosevelt<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1900<br/>Theodore Roosevelt<br/>1904<br/></td>
<td>Vacant throughMar. 4, 1905<br/>Charles W. Fairbanks<br/></td>
</tr>
<tr>
<td align="right">27</td>
<td align="right">27
</td>
<td>March 4, 1909–March 4, 1913<br/></td>
<td><br/></td>
<td>William Howard Taft<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1908<br/></td>
<td>James S. Sherman[e]<br/>Vacant afterOct. 30, 1912<br/></td>
</tr>
<tr>
<td align="right">28</td>
<td align="right">28
</td>
<td>March 4, 1913–March 4, 1921<br/></td>
<td><br/></td>
<td>Woodrow Wilson<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1912<br/>1916<br/></td>
<td>Thomas R. Marshall<br/></td>
</tr>
<tr>
<td align="right">29</td>
<td align="right">29
</td>
<td>March 4, 1921–August 2, 1923<br/></td>
<td><br/></td>
<td>Warren G. Harding[e]<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1920<br/></td>
<td>Calvin Coolidge<br/></td>
</tr>
<tr>
<td align="right">30</td>
<td align="right">30
</td>
<td>August 2, 1923[r]–March 4, 1929<br/></td>
<td><br/></td>
<td>Calvin Coolidge<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1920<br/>Calvin Coolidge<br/>1924<br/></td>
<td>Vacant throughMar. 4, 1925<br/>Charles G. Dawes<br/></td>
</tr>
<tr>
<td align="right">31</td>
<td align="right">31
</td>
<td>March 4, 1929–March 4, 1933<br/></td>
<td><br/></td>
<td>Herbert Hoover<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1928<br/></td>
<td>Charles Curtis<br/></td>
</tr>
<tr>
<td align="right">32</td>
<td align="right">32
</td>
<td>March 4, 1933–April 12, 1945<br/></td>
<td><br/></td>
<td>Franklin D. Roosevelt[e]<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1932<br/>1936<br/>1940<br/>1944<br/></td>
<td>John Nance Garner<br/>Henry A. Wallace<br/>Harry S. Truman<br/></td>
</tr>
<tr>
<td align="right">33</td>
<td align="right">33
</td>
<td>April 12, 1945–January 20, 1953<br/></td>
<td><br/></td>
<td>Harry S. Truman<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1944<br/>Harry S. Truman<br/>1948<br/></td>
<td>Vacant throughJan. 20, 1949<br/>Alben W. Barkley<br/></td>
</tr>
<tr>
<td align="right">34</td>
<td align="right">34
</td>
<td>January 20, 1953–January 20, 1961<br/></td>
<td><br/></td>
<td>Dwight D. Eisenhower<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1952<br/>1956<br/></td>
<td>Richard Nixon<br/></td>
</tr>
<tr>
<td align="right">35</td>
<td align="right">35
</td>
<td>January 20, 1961–November 22, 1963<br/></td>
<td><br/></td>
<td>John F. Kennedy[s]<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1960<br/></td>
<td>Lyndon B. Johnson<br/></td>
</tr>
<tr>
<td align="right">36</td>
<td align="right">36
</td>
<td>November 22, 1963–January 20, 1969<br/></td>
<td><br/></td>
<td>Lyndon B. Johnson<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1960<br/>Lyndon B. Johnson<br/>1964<br/></td>
<td>Vacant throughJan. 20, 1965<br/>Hubert Humphrey<br/></td>
</tr>
<tr>
<td align="right">37</td>
<td align="right">37
</td>
<td>January 20, 1969–August 9, 1974<br/></td>
<td><br/></td>
<td>Richard Nixon[h]<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1968<br/>1972<br/></td>
<td>Spiro Agnew[h]<br/>Vacant, Oct. 10 – Dec. 6, 1973<br/>Gerald Ford[t]<br/></td>
</tr>
<tr>
<td align="right">38</td>
<td align="right">38
</td>
<td>August 9, 1974–January 20, 1977<br/></td>
<td><br/></td>
<td>Gerald Ford<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1972<br/>Vacant, Oct. 10 – Dec. 6, 1973<br/>Gerald Ford[t]<br/></td>
<td>Vacant throughDec. 19, 1974<br/>Nelson Rockefeller[t]<br/></td>
</tr>
<tr>
<td align="right">39</td>
<td align="right">39
</td>
<td>January 20, 1977–January 20, 1981<br/></td>
<td><br/></td>
<td>Jimmy Carter<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1976<br/></td>
<td>Walter Mondale<br/></td>
</tr>
<tr>
<td align="right">40</td>
<td align="right">40
</td>
<td>January 20, 1981–January 20, 1989<br/></td>
<td><br/></td>
<td>Ronald Reagan<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1980<br/>1984<br/></td>
<td>George H. W. Bush<br/></td>
</tr>
<tr>
<td align="right">41</td>
<td align="right">41
</td>
<td>January 20, 1989–January 20, 1993<br/></td>
<td><br/></td>
<td>George H. W. Bush<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>1988<br/></td>
<td>Dan Quayle<br/></td>
</tr>
<tr>
<td align="right">42</td>
<td align="right">42
</td>
<td>January 20, 1993–January 20, 2001<br/></td>
<td><br/></td>
<td>Bill Clinton<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>1992<br/>1996<br/></td>
<td>Al Gore<br/></td>
</tr>
<tr>
<td align="right">43</td>
<td align="right">43
</td>
<td>January 20, 2001–January 20, 2009<br/></td>
<td><br/></td>
<td>George W. Bush<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>2000<br/>2004<br/></td>
<td>Dick Cheney<br/></td>
</tr>
<tr>
<td align="right">44</td>
<td align="right">44
</td>
<td>January 20, 2009–January 20, 2017<br/></td>
<td><br/></td>
<td>Barack Obama<br/></td>
<td><br/></td>
<td>Democratic<br/></td>
<td>2008<br/>2012<br/></td>
<td>Joe Biden<br/></td>
</tr>
<tr>
<td align="right">45</td>
<td align="right">45
</td>
<td>January 20, 2017–Incumbent<br/></td>
<td><br/></td>
<td>Donald Trump<br/></td>
<td><br/></td>
<td>Republican<br/></td>
<td>2016<br/></td>
<td>Mike Pence<br/></td>
</tr>
</tbody></table>
</div>

      </div>
      </div>
    );
  }


}

