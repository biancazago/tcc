import { HttpParams } from '@angular/common/http';
import { DataView } from 'primeng/dataview';

export class RequestUtil {

    static getRequestParams = (dataview: DataView): HttpParams => {
      let params: HttpParams = new HttpParams();
      if (dataview == null) {
        return params;
      }
    
      params = params.append('page', Math.round(dataview.first / dataview.rows).toString());
      params = params.append('size', dataview.rows == null ? null : dataview.rows.toString());
    
      const direction = dataview.sortOrder === 1 ? 'ASC' : 'DESC';
      params = params.append('sort', dataview.sortField == null ? '' : dataview.sortField + ',' + direction);
    
      return params;
    }
    
  }