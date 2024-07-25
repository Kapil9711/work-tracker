import dayjs from "dayjs";
class ApiFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  filter() {
    const copyStr = { ...this.queryStr };

    const queryDateArr = copyStr?.date?.split("-");
    const filterQuery = copyStr?.filter;
    // console.log(queryDateArr, filterQuery);

    const date = new Date();
    const year = queryDateArr?.length ? queryDateArr[2] : date.getFullYear();
    const month = queryDateArr?.length ? queryDateArr[1] - 1 : date.getMonth();
    const day = queryDateArr?.length ? queryDateArr[0] : date.getDate();

    let startOfDate = dayjs(
      new Date(Date.UTC(year, month, day, 0, 0, 0, 0))
    ).format();
    let endOfDate = dayjs(
      new Date(Date.UTC(year, month, day, 23, 59, 59, 999))
    ).format();

    if (filterQuery === "month") {
      startOfDate = dayjs(
        new Date(Date.UTC(year, month, copyStr.date ? day : 1, 0, 0, 0, 0))
      ).format();

      endOfDate = dayjs(
        new Date(
          Date.UTC(year, month + 1, copyStr.date ? day : 0, 23, 59, 59, 999)
        )
      ).format();
    }
    let query = {
      targetDateTime: {
        $gte: startOfDate,
        $lte: endOfDate,
      },
    };

    if (filterQuery === "false") query = {};
    this.query = this.query.find(query);
    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryStr.fields) {
      const fileds = this.queryStr.fields.split(",").join(" ");
      this.query = this.query.select(fileds);
    }
    return this;
  }

  // pagination() {
  // const page = parseInt(this.queryStr.page) || 1;
  // const limit = parseInt(this.queryStr.limit) || 10;
  // const skipResults = (page - 1) * limit;
  //   this.query = this.query.skip(skipResults).limit(limit);
  //   return this;
  // }
}

export default ApiFilters;
