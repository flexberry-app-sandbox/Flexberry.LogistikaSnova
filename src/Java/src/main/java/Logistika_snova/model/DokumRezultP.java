package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ДокумРезультП
 */
@Entity(name = "IISLogistika_snovaДокумРезультП")
@Table(schema = "public", name = "ДокумРезультП")
public class DokumRezultP {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ДатаПриб")
    private Date датаприб;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumPostav")
    @Convert("DokumPostav")
    @Column(name = "ДокумПостав", length = 16, unique = true, nullable = false)
    private UUID _dokumpostavid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumPostav", insertable = false, updatable = false)
    private DokumPostav dokumpostav;

    @OneToMany(mappedBy = "dokumrezultp", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHDostKon> tchdostkons;

    @OneToMany(mappedBy = "dokumrezultp", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHSvobMest> tchsvobmests;


    public DokumRezultP() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Date getДатаПриб() {
      return датаприб;
    }

    public void setДатаПриб(Date датаприб) {
      this.датаприб = датаприб;
    }


}