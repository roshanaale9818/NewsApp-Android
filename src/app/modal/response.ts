export class Response {
articles?:ResponseData[]; 
status:string;
totalResults: number;
}
export class ResponseData{
author?: string;
content?: string;
description?: string;
publishedAt?: string;
title?:string;
url?:string;
urlToImage?:string;
}
